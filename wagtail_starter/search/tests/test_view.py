from django.conf import settings
from django.test import override_settings
from wagtail.models import Site
from django.test import TestCase

from wagtail_starter.home.models import HomePage


class SearchViewTests(TestCase):
    @classmethod
    def setUpTestData(cls):
        super().setUpTestData()
        site = Site.objects.get(is_default_site=True)
        site.hostname = "testserver"
        site.save()
        cls.home = HomePage.objects.first()
        cls.SEARCH_URL = "/search/"

    def test_search_listings_always_return_noindex(self):
        """
        Search pages should apply noindex to avoid Google
        indexing inappropriate search queries.
        For example:
            the query -> example.com/search/?query="buy%20cocaine%20online%20@..."
            should not return -> "Search results for buy cocaine online @...
            on Google.
        """
        unsafe_to_index_search_urls = [
            self.SEARCH_URL + "?query=illicit",
            self.SEARCH_URL + "?query=None illicit content",
            self.SEARCH_URL + "?bar=foo&query=illicit text"
        ]

        for search_url in unsafe_to_index_search_urls:
            with override_settings(SEO_NOINDEX=True):
                resp = self.client.get(search_url)
                self.assertEqual(settings.SEO_NOINDEX, True)
                # Should contain noindex
                self.assertContains(resp, '<meta name="robots" content="noindex">')
                self.assertEqual(200, resp.status_code)

        # Even with SEO_NOINDEX set to False, the search view should still contain noindex
        for search_url in unsafe_to_index_search_urls:
            with override_settings(SEO_NOINDEX=False):
                resp = self.client.get(search_url)
                self.assertEqual(settings.SEO_NOINDEX, False)
                # Should contain noindex
                self.assertContains(resp, '<meta name="robots" content="noindex">')
                self.assertEqual(200, resp.status_code)

    def test_search_view_results(self):
        query = self.home.title
        resp = self.client.get(
            self.SEARCH_URL,
            {"query": query},
            format="json",
        )
        self.assertEqual(resp.status_code, 200)
        self.assertContains(resp, self.home.title)

    def test_search_view_no_results(self):
        resp = self.client.get(
            self.SEARCH_URL,
            {"query": "gibberish"},
            format="json",
        )
        self.assertEqual(resp.status_code, 200)
        self.assertContains(resp, "There are no matching results.")

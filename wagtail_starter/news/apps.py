from django.apps import AppConfig


class NewsConfig(AppConfig):
    default_auto_field: str = "django.db.models.AutoField"
    name = "wagtail_starter.news"

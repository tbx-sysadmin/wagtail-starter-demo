from django import template

register = template.Library()


# Primary nav snippets
@register.inclusion_tag(
    "components/navigation/primarynav.html", takes_context=True
)
def primarynav(context):
    request = context["request"]
    return {
        "primarynav": context["settings"]["navigation"][
            "NavigationSettings"
        ].primary_navigation,
        "request": request,
    }

# Mobile nav snippets
@register.inclusion_tag(
    "components/navigation/mobilenav.html", takes_context=True
)
def mobilenav(context):
    request = context["request"]
    return {
        "mobilenav": context["settings"]["navigation"][
            "NavigationSettings"
        ].primary_navigation,
        "settings": context["settings"],
        "request": request,
    }


# Footer nav snippets
@register.inclusion_tag(
    "components/navigation/footernav.html", takes_context=True
)
def footernav(context):
    request = context["request"]
    return {
        "footernav": context["settings"]["navigation"][
            "NavigationSettings"
        ].footer_navigation,
        "request": request,
    }

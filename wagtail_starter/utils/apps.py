from django.apps import AppConfig


class UtilsConfig(AppConfig):
    default_auto_field: str = "django.db.models.AutoField"
    name = "wagtail_starter.utils"
    label = "utils"

# Generated by Django 3.2.12 on 2022-02-21 23:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0022_auto_20220221_1338'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='seen_updates',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]

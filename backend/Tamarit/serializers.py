from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Profile, Site, Comment , Favorite


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email']


class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Profile
        fields = ['user', 'role']


class SiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Site
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Comment
        fields = ['user', 'site', 'text', 'created_at']


class FavoriteSerializer(serializers.ModelSerializer):
    site = SiteSerializer()

    class Meta:
        model = Favorite
        fields = ['site']


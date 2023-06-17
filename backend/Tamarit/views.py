from django.shortcuts import render, redirect
from rest_framework import generics , status
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from django.http import JsonResponse
from django.views import View
from .models import *
from .serializers import *

#--------------------------- Site -------------------------
@api_view(['GET'])
def site_list(request):
    if request.method == 'GET' : 
        sites = Site.objects.all()
        serializer = SiteDetailsSerializer(sites, many=True)
        return JsonResponse({'sites' : serializer.data})
    
#---------------------------------------------------------------------------
#----------------------------- Create site ------------------------
@api_view(['POST'])
def create_site(request):
    serializer = SiteSerializer(data=request.data)
    if serializer.is_valid():
        site = serializer.save()
        # Create related opening hours
        opening_hours_data = request.data.get('opening_hours', [])
        for opening_hour_data in opening_hours_data:
            opening_hour_data['site'] = site.id
            opening_hour_serializer = OpeningHoursSerializer(data=opening_hour_data)
            if opening_hour_serializer.is_valid():
                opening_hour_serializer.save()
            else:
                return Response(opening_hour_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        # Create related images
        images_data = request.FILES.getlist('images', [])
        for image_data in images_data:
            image_serializer = ImagesSerializer(data={'site': site.id, 'image': image_data})
            if image_serializer.is_valid():
                image_serializer.save()
            else:
                return Response(image_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        # Create related transportation
        transportation_data = request.data.get('transportation', [])
        for transportation_item_data in transportation_data:
            transportation_item_data['site'] = site.id
            transportation_serializer = TransportationSerializer(data=transportation_item_data)
            if transportation_serializer.is_valid():
                transportation_serializer.save()
            else:
                # Handle validation errors for transportation if needed
                return Response(transportation_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        # Create related events
        event_data = request.data.get('event', [])
        for event_item_data in event_data:
            event_item_data['site'] = site.id
            event_serializer = EventSerializer(data=event_item_data)
            if event_serializer.is_valid():
                event_serializer.save()
            else:
                return Response(event_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#------------------------------------------------------------------
@api_view(['GET'])
@csrf_exempt
def site_details(request,id,format=None):
    try:
        site = Site.objects.get(pk=id)
    except Site.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = SiteDetailsSerializer(site)
        return Response(serializer.data)
#-------------------------------------

@api_view(['GET', 'PUT', 'DELETE'])
@csrf_exempt
def site_details_emp(request,id,format=None):
    try:
        site = Site.objects.get(pk=id)
    except Site.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = SiteDetailsSerializer(site)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = SiteSerializer(site, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        site.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

#-----------------------------------------------------------------------------
#---------------------- Contact ---------------------------------------
@api_view(['POST'])
def create_contactMsg(request):
 if request.method == 'POST' : 
        serializer = ContactMessageSerializer(data= request.data)
        if serializer.is_valid() :
            serializer.save()
            return Response(serializer.data , status= status.HTTP_201_CREATED)

'''class ContactMessageView(APIView):
    def post(self, request, format=None):
        serializer = ContactMessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)'''

@api_view(['GET'])
def contactMsg_list(request):
    if request.method == 'GET' : 
        messages = ContactMessage.objects.all()
        serializer = ContactMessageSerializer(messages, many=True)
        return JsonResponse({'messages' : serializer.data})

#----------------------------------------------------------------------
#-------------- Favorites ---------------------------------------
'''@api_view(['POST'])
def add_favorite(request):
    ##user = request.user
    site_id = request.data.get('site_id')

    try:
        site = Site.objects.get(id=site_id)
    except Site.DoesNotExist:
        return Response({'error': 'Site not found'}, status=status.HTTP_404_NOT_FOUND)

    user.favorite_sites.add(site)
    return Response({'success': 'Site added to favorites'}, status=status.HTTP_200_OK)
'''
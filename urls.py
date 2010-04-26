from django.conf.urls.defaults import *

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    (r'^$', 'bandana.profiles.views.home'),
    (r'^bands/$', 'bandana.profiles.views.index'),
    (r'^bands/(?P<s>\w+)/$', 'bandana.profiles.views.band'),
    # Example:
    # (r'^bandana/', include('bandana.foo.urls')),

    # Uncomment the admin/doc line below and add 'django.contrib.admindocs' 
    # to INSTALLED_APPS to enable admin documentation:
    # (r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    (r'^admin/', include(admin.site.urls)),
)

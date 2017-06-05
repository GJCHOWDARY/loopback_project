MAJOR TODOs
===

1.Use NGINX to:
---
  1. Reverse proxy onto Strongloop
  2. Authenticate every request against KeyCloak
  3. Attach the user's keycloak id for Strongloop to filter all data against
  4. Front all SSL requests

2.Update Strongloop with:
---

  1. Add a base Class that checks the requester's KeyCloak id against the user's permissions
  2. filter's out the keycloak key from leaving the server
  3. Remove unnecessary endpoint verbs from all endpoints
  4. Remove access to Swagger

3.Deployment
---
  1. Package whole project up into a self-installing package (eg use slc --pack)
  2. Integrate the package into a Docker image
  3. Add convenience routines to open developer tools or lockdown / remove for production environment
  4. Add ENV vars to configure as many aspects as needed

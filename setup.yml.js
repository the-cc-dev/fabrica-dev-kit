module.exports = (data) => `
# Fabrica Dev Kit setup configuration
# Modify for your project, then run \`fdk setup\` from this folder

# Project settings
slug: ${data.slug || 'fdk-project'} # lowercase letters only (also used for theme slug and PHP namespacing)
title: ${data.title || 'FDK Project'}
author:
  name: ${data.author_name || 'FDK Project Author'}
  email: ${data.author_email || 'admin@fdk.dev'}
  url: ${data.author_url || 'http://fdk.dev/'}

# WordPress settings
wp:
  admin: # development site admin user credentials
    user: ${data.wp_admin_user || 'fabrica'}
    pass: ${data.wp_admin_pass || 'fabrica'}
    email: ${data.wp_admin_email || 'admin@fdk.dev'}
  lang: en_US # dev site WP locale/language
  rewrite_structure: /%postname%/ # dev site permalink structure (can be changed later)
  # acf_pro_key: # optional (if set will preinstall Advanced Custom Fields Pro)
  plugins: # optional (installs plugins at setup - use URL slugs from WP plugins directory)
  # - advanced-custom-fields
  # - force-regenerate-thumbnails

# Google Analytics - optional (will preset tracking code in theme, can be added manually later)
# google_analytics_id:
`;

# drupal-react-redux-blocks

A drupal 8 module for testing how to use react with drupal in multiple mounting points (drupal blocks) with shared state. State is stored in redux and synced to localStorage. Mock data is fetched from https://jsonplaceholder.typicode.com/.

Webpack outputs one bundle which includes all shared dependencies and one bundle for each block.

Authblock uses auth0 (https://auth0.com/) which can be configured with drush:
* `drush config-set react_blocks.config "auth0_domain" "http://www.example.com"`
* `drush config-set react_blocks.config "auth0_client_id" "123456789123456789"`

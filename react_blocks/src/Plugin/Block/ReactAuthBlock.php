<?php

namespace Drupal\react_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'react_auth_block' block.
 *
 * @Block(
 *  id = "react_auth_block",
 *  admin_label = @Translation("React Auth Block"),
 * )
 */
class ReactAuthBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    return [
      '#attached' => [
        'library' => [
          'react_blocks/vendor_bundle',
          'react_blocks/auth_block_bundle',
        ],
      ],
    ];
  }
}

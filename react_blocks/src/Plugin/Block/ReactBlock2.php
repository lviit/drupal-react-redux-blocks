<?php

namespace Drupal\react_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'react_block_2' block.
 *
 * @Block(
 *  id = "react_block_2",
 *  admin_label = @Translation("React Block 2"),
 * )
 */
class ReactBlock2 extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    return [
      '#attached' => [
        'library' => [
          'react_blocks/vendor_bundle',
          'react_blocks/bundle',
        ],
      ],
    ];
  }
}

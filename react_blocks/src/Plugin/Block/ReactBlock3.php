<?php

namespace Drupal\react_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'react_block_3' block.
 *
 * @Block(
 *  id = "react_block_3",
 *  admin_label = @Translation("React Block 3"),
 * )
 */
class ReactBlock3 extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    return [
      '#attached' => [
        'library' => [
          'react_blocks/block_3_bundle',
        ],
      ],
    ];
  }
}

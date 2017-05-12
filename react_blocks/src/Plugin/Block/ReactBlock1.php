<?php

namespace Drupal\react_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'react_block_1' block.
 *
 * @Block(
 *  id = "react_block_1",
 *  admin_label = @Translation("React Block 1"),
 * )
 */
class ReactBlock1 extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    return [
      '#attached' => [
        'library' => [
          'react_blocks/block_1_bundle',
        ],
      ],
    ];
  }
}

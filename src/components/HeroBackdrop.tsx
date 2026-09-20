/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import soft from '../assets/hero-soft.webp';
import softMobile from '../assets/hero-soft-m.webp';

// Clean white with soft pastel shades along the top and corners (peach, sky, lilac, pink, mint).
// Pre-rendered static images: no live effects, nothing to recompute while scrolling.
export default function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-white">
      <div
        className="hidden lg:block absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${soft})` }}
      />
      <div
        className="lg:hidden absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: `url(${softMobile})` }}
      />
      {/* melts into the white page below */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </div>
  );
}

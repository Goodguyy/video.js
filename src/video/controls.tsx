/** @jsxImportSource react */

import { Controls, Tooltip } from '@videojs/react';

import { CaptionsToggle } from './shared/captions-button';
import { ControlsRow } from './shared/controls';
import { FullscreenButton } from './shared/screen-controls';
import { SettingsMenu } from './shared/settings-menu';
import { TimeSlider, type ThumbnailSlot } from './shared/time-slider';

export function VideoControls({ renderThumbnail }: ThumbnailSlot = {}) {
  return (
    <Controls.Root visibility="always">
      <Controls.Content className="cinema-rail">
        <Tooltip.Provider>
          <TimeSlider renderThumbnail={renderThumbnail} />
          <ControlsRow captions={<CaptionsToggle />} menu={<SettingsMenu />} trailing={<FullscreenButton />} />
        </Tooltip.Provider>
      </Controls.Content>
    </Controls.Root>
  );
}

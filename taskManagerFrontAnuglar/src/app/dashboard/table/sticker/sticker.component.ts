import { Component, Input } from '@angular/core';
import { Sticker } from 'src/app/shared/models/sticker.interface';
import { StickersService } from 'src/app/services/stickers/stickers.service';

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.scss'],
})
export class StickerComponent {
  constructor(private stickersService: StickersService) {}

  ngOnInit(): void {}

  @Input() stickerData: Sticker;

  openSticker(): void {
    this.stickersService.openFullSticker(this.stickerData);
  }

  editSticker(): void {
    this.stickersService.editSticker(this.stickerData);
  }

  removeSticker(): void {
    this.stickersService.deleteSticker(this.stickerData);
  }
}

package com.example.taskmanager.sticker;

public class StickerDTO {
 private String title;
    private StickerStatus stickerStatus;

    public StickerDTO() {
    }

    public StickerDTO(String title, StickerStatus stickerStatus) {
        this.title = title;
        this.stickerStatus = stickerStatus;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public StickerStatus getStickerStatus() {
        return stickerStatus;
    }

    public void setStickerStatus(StickerStatus stickerStatus) {
        this.stickerStatus = stickerStatus;
    }

    @Override
    public String toString() {
        return "StickerDTO [title=" + title + ", stickerStatus=" + stickerStatus + "]";
    }
}

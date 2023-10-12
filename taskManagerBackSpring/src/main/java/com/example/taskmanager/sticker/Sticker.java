package com.example.taskmanager.sticker;

import com.example.taskmanager.stickersTable.StickersTable;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.*;

@Entity
@Table(name = "sticker")
public class Sticker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    @Enumerated(EnumType.STRING)
    private StickerStatus stickerStatus;
    private String description;
    private String date;
    @ManyToOne
    @JoinColumn(name = "stickers_table_id")
    @JsonIgnoreProperties("stickers")
    private StickersTable stickersTable;

    public Sticker() {
    }

    public Sticker(String title, StickerStatus stickerStatus, String date, StickersTable stickersTable) {
        this.title = title;
        this.stickerStatus = stickerStatus;
        this.date = date;
        this.stickersTable = stickersTable;
    }

    public Sticker(String title, StickerStatus stickerStatus, String description, String date,
            StickersTable stickersTable) {
        this.title = title;
        this.stickerStatus = stickerStatus;
        this.description = description;
        this.date = date;
        this.stickersTable = stickersTable;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        System.out.println("SET DESCRIPTION METHOD " + description);
        this.description = description;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public StickersTable getStickersTable() {
        return stickersTable;
    }

    public void setStickersTable(StickersTable stickersTable) {
        this.stickersTable = stickersTable;
    }

    @Override
    public String toString() {
        return "Sticker [id=" + id + ", title=" + title + ", description=" + description + ", date=" + date
                + ", stickersTable=" + stickersTable + "]";
    }

}


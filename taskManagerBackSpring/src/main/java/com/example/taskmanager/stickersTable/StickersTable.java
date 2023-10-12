package com.example.taskmanager.stickersTable;

import java.util.List;

import com.example.taskmanager.sticker.Sticker;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.*;

@Entity
@Table(name = "stickers_table")
public class StickersTable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "table_id")
    private long id;
    @Column(name = "name")
    private String name;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "stickersTable", orphanRemoval = true)
    @JsonIgnoreProperties("stickersTable")
    private List<Sticker> stickers;

    public StickersTable() {
    }

    public StickersTable(String name) {
        this.name = name;
    }

    public StickersTable(String name, List<Sticker> stickers) {
        this.name = name;
        this.stickers = stickers;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Sticker> getStickers() {
        return stickers;
    }

    public void setStickers(List<Sticker> stickers) {
        this.stickers = stickers;
    }

    @Override
    public String toString() {
        return "StickersTable [id=" + id + ", name=" + name + ", stickers=" + stickers + "]";
    }

}

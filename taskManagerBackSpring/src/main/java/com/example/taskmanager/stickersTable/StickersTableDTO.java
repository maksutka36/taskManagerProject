package com.example.taskmanager.stickersTable;

public class StickersTableDTO {
    private Long id;
    private String name;

    public StickersTableDTO() {
    }

    public StickersTableDTO(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "StickersTableDTO [id=" + id + ", name=" + name + "]";
    }
}

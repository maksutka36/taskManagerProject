package com.example.taskmanager.sticker;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.taskmanager.stickersTable.StickersTable;
import com.example.taskmanager.stickersTable.StickersTableRepository;

@Service
public class StickerService {

    private final StickerRepository stickerRepository;

    public StickerService(StickerRepository stickerRepository, StickersTableRepository stickersTableRepository) {
        this.stickerRepository = stickerRepository;
    }

    public List<Sticker> getStickers() {
        return stickerRepository.findAll();
    }

    public void addNewSticker(Sticker sticker) {
        stickerRepository.save(sticker);
    }

    public void addNewListStickers(StickersTable stickersTable) {
        if (stickersTable.getStickers() != null) {
            List<Sticker> stickersList = new ArrayList<Sticker>();
            stickersTable.getStickers().forEach(sticker -> {
                Sticker newSticker = new Sticker();
                newSticker.setTitle(sticker.getTitle());
                newSticker.setStickerStatus(sticker.getStickerStatus());
                newSticker.setStickersTable(stickersTable);
                stickersList.add(newSticker);
            });

            stickerRepository.saveAll(stickersList);
        }
    }

    public void updateListStickers(StickersTable oldStickersTable, StickersTable newStickersTable) {
        oldStickersTable.getStickers().forEach(sticker -> {
            stickerRepository.deleteById(sticker.getId());
        });

        stickerRepository.deleteById((long) 1);
        List<Sticker> stickersList = new ArrayList<Sticker>();
        newStickersTable.getStickers().forEach(sticker -> {
            System.out.println("getDescription" + sticker.getDescription());

            Sticker newSticker = new Sticker();
            newSticker.setTitle(sticker.getTitle());
            newSticker.setStickerStatus(sticker.getStickerStatus());
            newSticker.setDescription(sticker.getDescription());
            newSticker.setDate(sticker.getDate());
            newSticker.setStickersTable(newStickersTable);
            stickersList.add(newSticker);
        });

        stickerRepository.saveAll(stickersList);
    }

    public void deleteSticker(Long id) {
        this.stickerRepository.deleteById(id);
    }
}

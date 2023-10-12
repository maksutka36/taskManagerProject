package com.example.taskmanager.stickersTable;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.taskmanager.sticker.StickerService;

@Service
public class StickersTableService {
    private final StickersTableRepository stickersTableRepository;

    private final StickerService stickerService;

    public StickersTableService(StickersTableRepository stickersTableRepository, StickerService stickerService) {
        this.stickersTableRepository = stickersTableRepository;
        this.stickerService = stickerService;
    }

    public List<StickersTableDTO> getStickersTable() {
        List<StickersTable> stickersTable = stickersTableRepository.findAll();
        List<StickersTableDTO> stickersTableDTOs = new ArrayList<StickersTableDTO>();
        stickersTable.forEach(table -> {
            StickersTableDTO stickersTableDTO = new StickersTableDTO();
            stickersTableDTO.setId(table.getId());
            stickersTableDTO.setName(table.getName());
            stickersTableDTOs.add(stickersTableDTO);
        });

        return stickersTableDTOs;
    }

    public StickersTable getFullTable(Long tableId) {
        return this.stickersTableRepository.findById(tableId).orElse(null);
    }

    public StickersTable addStickers(long id) {
        return stickersTableRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));
    }

    public StickersTable addNewStickersTable(StickersTable stickersTable) {
        StickersTable createdStickersTable = stickersTableRepository.findByName(stickersTable.getName()).orElse(null);
        if (createdStickersTable != null) {
            return createdStickersTable;
        } else {
            stickersTableRepository.save(stickersTable);
            stickerService.addNewListStickers(stickersTable);
            return null;
        }
    }

    public StickersTable updateStcikersTable(StickersTable stickersTable) {
        StickersTable updatedStickersTable = stickersTableRepository.findById(stickersTable.getId()).orElse(null);
        if (updatedStickersTable != null) {
            updatedStickersTable.setName(stickersTable.getName());
            updatedStickersTable.getStickers().clear();
            stickerService.updateListStickers(updatedStickersTable, stickersTable);
            stickersTableRepository.save(updatedStickersTable);
            return updatedStickersTable;
        } else {
            return null;
        }
    }

    public boolean deleteStickersTable(Long tableId) {
        StickersTable stickersTable = this.stickersTableRepository.findById(tableId).orElse(null);
        if (stickersTable != null) {
            this.stickersTableRepository.deleteById(tableId);
            return true;
        } else {
            return false;
        }
    }

}

package com.example.taskmanager.stickersTable;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/stickersTable")
@CrossOrigin(origins = "http://localhost:4200")
public class StickersTableController {

    @Autowired
    private final StickersTableService stickersTableService;

    public StickersTableController(StickersTableService stickersTableService) {
        this.stickersTableService = stickersTableService;
    }

    @GetMapping()
    public ResponseEntity<List<StickersTableDTO>> getStickersTable() {
        List<StickersTableDTO> stickersTables = this.stickersTableService.getStickersTable();
        return new ResponseEntity<List<StickersTableDTO>>(stickersTables, HttpStatus.OK);
    }

    @GetMapping("getFullTable/{tableId}")
    public ResponseEntity<StickersTable> getFullTable(@PathVariable Long tableId) {
        StickersTable stickersTable = stickersTableService.getFullTable(tableId);
        if (stickersTable != null) {
            return new ResponseEntity<StickersTable>(stickersTable, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping()
    public ResponseEntity<StickersTable> addStickersTable(@RequestBody StickersTable stickersTable) {
        StickersTable createdStickersTable = this.stickersTableService.addNewStickersTable(stickersTable);
        if (createdStickersTable != null) {
            throw new IllegalStateException("Table with this name is already exist");
        } else {
            return new ResponseEntity<StickersTable>(createdStickersTable, HttpStatus.CREATED);
        }
    }

    @PutMapping()
    public ResponseEntity<StickersTable> updateStickersTable(@RequestBody StickersTable stickersTable) {
        StickersTable updatedStickersTable = stickersTableService.updateStcikersTable(stickersTable);
        if (updatedStickersTable != null) {
            return new ResponseEntity<StickersTable>(updatedStickersTable, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{tableId}")
    public ResponseEntity<Void> deleteTable(@PathVariable Long tableId) {
        boolean deleted = stickersTableService.deleteStickersTable(tableId);
        if (deleted) {
            return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }
    }

}

package com.example.taskmanager.stickersTable;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.example.taskmanager.sticker.Sticker;
import com.example.taskmanager.sticker.StickerRepository;
import com.example.taskmanager.sticker.StickerStatus;

@Configuration
public class StickersTableConfig {
    @Bean
    CommandLineRunner commandLineRunner(StickersTableRepository stickersTableRepository,
            StickerRepository stickerRepository) {
        return args -> {
            StickersTable stickersTable1 = new StickersTable();
            stickersTable1.setName("StcikersTable 1");
            stickersTableRepository.save(stickersTable1);

            StickersTable stickersTable2 = new StickersTable();
            stickersTable2.setName("StcikersTable 2");
            stickersTableRepository.save(stickersTable2);

            // Create and save stickers associated with products
            Sticker sticker1 = new Sticker();
            sticker1.setTitle("Sticker 1");
            sticker1.setStickerStatus(StickerStatus.TODO);
            sticker1.setStickersTable(stickersTable1);
            stickerRepository.save(sticker1);

            // Create and save stickers associated with products
            Sticker sticker2 = new Sticker();
            sticker2.setTitle("Sticker 2");
            sticker2.setStickersTable(stickersTable2);
            stickerRepository.save(sticker2);

            // Create and save stickers associated with products
            Sticker sticker3 = new Sticker();
            sticker3.setTitle("Sticker 3");
            sticker3.setStickersTable(stickersTable2);
            stickerRepository.save(sticker3);
        };
    }
}

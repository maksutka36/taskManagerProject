package com.example.taskmanager.stickersTable;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface StickersTableRepository extends JpaRepository<StickersTable, Long> {

    @Query("SELECT s FROM StickersTable s WHERE s.name = ?1")
    Optional<StickersTable> findByName(String name);
}


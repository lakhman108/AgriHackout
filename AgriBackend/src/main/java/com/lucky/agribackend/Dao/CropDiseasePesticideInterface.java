package com.lucky.agribackend.Dao;

import com.lucky.agribackend.entity.CropDiseasePesticide;
import com.lucky.agribackend.entity.Disease;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CropDiseasePesticideInterface extends JpaRepository<CropDiseasePesticide, Integer> {

    @Query("SELECT DISTINCT cdp.disease.id FROM CropDiseasePesticide cdp WHERE cdp.crop.id = :cropId")
    List<Integer> findUniqueDiseaseIdsByCropId(@Param("cropId") int cropId);
}

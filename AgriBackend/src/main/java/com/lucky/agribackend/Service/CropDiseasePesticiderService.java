package com.lucky.agribackend.Service;

import java.util.List;
import java.util.stream.Collectors;

import com.lucky.agribackend.entity.Pesticide;
import com.lucky.agribackend.entity.CropDiseasePesticide;
import com.lucky.agribackend.entity.PesticideDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lucky.agribackend.Dao.CropDiseasePesticideInterface;
import com.lucky.agribackend.Dao.DiseaseInterface;
import com.lucky.agribackend.entity.Disease;

@Service
public class CropDiseasePesticiderService {

    @Autowired
    private CropDiseasePesticideInterface cdpi;

    @Autowired
    private DiseaseInterface disRepo;

    public List<Disease> findDiseaseIdsByCropId(int cropId) {
        List<Integer> dislist = cdpi.findUniqueDiseaseIdsByCropId(cropId);
        List<Disease> diseases = disRepo.findAllById(dislist);
        return diseases;
    }

    public List<PesticideDTO> findrelatedpesticides(Integer cropId, List<Integer> diseaseIds) {
        List<CropDiseasePesticide> cropDiseasePesticides = cdpi.findByCropIdAndDiseaseIdIn(cropId, diseaseIds);

        return cropDiseasePesticides.stream()
                .filter(cdp -> cdp.getPesticide() != null)  // Filter out null pesticides
                .map(cdp -> new PesticideDTO(
                        cdp.getPesticide().getName(),
                        cdp.getDosage(),
                        cdp.getPesticide().getPrice()))
                .distinct()
                .collect(Collectors.toList());
    }
}
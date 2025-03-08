package com.jc.porfolio.model.repository;

import com.jc.porfolio.model.entity.Formulario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FormularioRepository extends JpaRepository<Formulario, Long>{

}

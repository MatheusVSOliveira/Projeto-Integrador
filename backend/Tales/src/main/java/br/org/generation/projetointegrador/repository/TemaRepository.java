package br.org.generation.projetointegrador.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import br.org.generation.projetointegrador.model.Tema;

public interface TemaRepository extends JpaRepository<Tema, Long> {

	public List<Tema> findAllByNomeContainingIgnoreCase(String descricao);
}

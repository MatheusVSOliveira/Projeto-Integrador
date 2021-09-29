package br.org.generation.projetointegrador.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tb_temas")
public class Tema {
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private long id;
	
	@NotNull(message = "A descrição não foi adicionada")
	@Size(min = 3 ,max = 255,message = "O texto deve ter no minímo 3 caracteres e no máximo 255 caracteres")
	private String descricao;
	
	@Size(min = 3 ,max = 255,message = "A palavra chave deve ter no minímo 3 caracteres e no máximo 255 caracteres")
	private String palavra_chave;
	
	@NotNull
	@Size(min = 3,max = 255,message = "O nome do tema deve ter no minímo 3 caracteres e no máximo 255 cracteres")
	private String nome;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getPalavra_chave() {
		return palavra_chave;
	}

	public void setPalavra_chave(String palavra_chave) {
		this.palavra_chave = palavra_chave;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

}

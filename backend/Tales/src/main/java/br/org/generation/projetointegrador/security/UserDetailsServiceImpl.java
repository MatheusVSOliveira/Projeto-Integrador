package br.org.generation.projetointegrador.security;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import br.org.generation.projetointegrador.model.Usuario;
import br.org.generation.projetointegrador.repository.UsuarioRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{

	@Autowired
	private UsuarioRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
		Optional<Usuario> usuario = userRepository.findByUsuario(username);
		usuario.orElseThrow(()-> new UsernameNotFoundException(username+ " not found"));
		return usuario.map(UserDetailslmpl::new).get();
	}
}

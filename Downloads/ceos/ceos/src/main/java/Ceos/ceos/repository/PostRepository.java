package Ceos.ceos.repository;

import Ceos.ceos.domain.entity.Post;
import Ceos.ceos.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findByWriter(User writer);
}

package com.example.fusalmatching.repository;

import com.example.fusalmatching.domain.Field;
import com.example.fusalmatching.domain.TeamReview;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamReviewRepository extends JpaRepository<TeamReview, Long> {
}

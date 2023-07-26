package com.example.fusalmatching.domain;

import com.example.fusalmatching.dto.Role;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.*;
import java.util.stream.Collectors;

@Getter
@Builder
@AllArgsConstructor
@ToString
@Table(indexes = {
        @Index(columnList = "teamName")
})
@Entity
public class Team extends AuditingFields implements UserDetails {



    @Id
    @Setter
    private String id;

    @Setter private String password;

    @Setter private String teamName;

    @OneToMany(mappedBy = "team")
    @ToString.Exclude
    private final Set<TeamReview> teamReviews = new LinkedHashSet<>();

    @OneToMany(mappedBy = "team1")
    @ToString.Exclude
    private final Set<MatchingRecord> matchingRecordsFrom1 = new LinkedHashSet<>();

    @OneToMany(mappedBy = "team2")
    @ToString.Exclude
    private final Set<MatchingRecord> matchingRecordsFrom2 = new LinkedHashSet<>();

    @Setter private int manner;

    @Setter private int skill;

    @Setter private int evaluationCount;






    protected Team() {};

    private Team(String teamId, String teamName, String password) {
        this.id = teamId;
        this.teamName = teamName;
        this.password = password;
    }

    public static Team of(String teamId, String teamName, String password) {
        return new Team(teamId, teamName, password);
    }


    @ElementCollection(fetch = FetchType.EAGER)
    @Builder.Default
    private List<String> roles = new ArrayList<>();

//    Role roles;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

        this.roles.add("USER");

        return this.roles.stream()
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());





    }

    @Override
    public String getUsername() {
        return null;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Team team = (Team) o;
        return manner == team.manner && skill == team.skill && evaluationCount == team.evaluationCount && Objects.equals(id, team.id) && Objects.equals(password, team.password) && Objects.equals(teamName, team.teamName) && Objects.equals(teamReviews, team.teamReviews) && Objects.equals(matchingRecordsFrom1, team.matchingRecordsFrom1) && Objects.equals(matchingRecordsFrom2, team.matchingRecordsFrom2) && Objects.equals(roles, team.roles);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, password, teamName, teamReviews, matchingRecordsFrom1, matchingRecordsFrom2, manner, skill, evaluationCount, roles);
    }
}

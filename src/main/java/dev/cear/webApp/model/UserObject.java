package dev.cear.webApp.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class UserObject {
    private Long userId;
    private String userName;

    @Id
    public Long getUserId() {
        return userId;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}

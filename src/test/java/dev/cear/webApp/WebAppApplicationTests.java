package dev.cear.webApp;

import dev.cear.webApp.model.UserObject;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class WebAppApplicationTests {

	@Test
	void contextLoads() {
	}

	@Test
	void testUser() {
		Configuration configuration = new Configuration();
		configuration.addAnnotatedClass(UserObject.class);
		SessionFactory sessionFactory = configuration.configure().buildSessionFactory();
		Session session = sessionFactory.openSession();
		session.beginTransaction();

		UserObject user = new UserObject();
		user.setUserId(1L);
		user.setUserName("userName");

		session.save(user);
		session.getTransaction().commit();
		sessionFactory.close();
	}

}

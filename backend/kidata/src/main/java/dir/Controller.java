package dir;

import org.jetbrains.annotations.NotNull;
import org.springframework.boot.configurationprocessor.json.JSONException;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import tables.*;

import java.sql.SQLException;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping("/")
@Configuration
@EnableWebMvc
public class Controller extends WebMvcConfigurerAdapter {

    public Controller() {
        super();
        System.out.println("Controller");
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedOrigins("*");
    }


    @RequestMapping("/pull/{table}/{id}")
    public String pull(@PathVariable("id") String id, @PathVariable("table") String table) throws SQLException, JSONException {
    String s = "false";
    String [] arr ={};
        System.out.print(table);
        System.out.println(id);
    switch (table){
        case "lesson": s = lesson(id, arr, "pull"); break;
        case "slides": s = slides(id, arr, "pull"); break;
        case "user": s = user(id, arr, "pull"); break;
    }
        return s;
    }

    @RequestMapping("delete/{table}/{id}")
    public String delete(@PathVariable("id") String id, @PathVariable("table") String table) throws SQLException, JSONException {
        String s = "true";
        String [] arr ={};
        System.out.print(table);
        System.out.println(id);
        switch (table){
            case "lesson": lesson(id, arr, "delete"); break;
            case "slides": slides(id, arr, "delete"); break;
            case "user": user(id, arr, "delete"); break;
            case "feedback": feedback(id, arr, "delete"); break;
        }
        return s;
    }

    @PostMapping(value = "post/feedback")
    @ResponseBody
    public void postfeedback(String name, String email, String questiontype, String question) throws SQLException {
        String []arr = {name, email, questiontype, question};
        System.out.println(arr);
        feedback("", arr, "insert");
    }


    @RequestMapping("check/{what}/{text}")
    public String check(@PathVariable("what") String what, @PathVariable("text") String text) throws SQLException, JSONException {
        MySQLManipulation ms = new MySQLManipulation();
        User us = new User(ms.getConnection());
        String [] arr = text.split("-");
        String s = "";
        switch(what){
            case "login": s = us.check(arr[0], arr[1]); break;
            case "username": s = us.checkExists(arr[0]); break;
        }
        return s;
    }

    public String feedback(String id, String[] arr, @NotNull String instruction) throws SQLException {
        String s = "";
        MySQLManipulation ms = new MySQLManipulation();
        Feedback temp = new Feedback(ms.getConnection());
        switch (instruction){
            case "insert": temp.insert(arr); s = "true"; break;
            case "delete": temp.delete(id); s = "true"; break;
        }
        return s;
    }

    public String lesson(String id, String[] arr, String instruction) throws SQLException, JSONException {
        String s = "";
        MySQLManipulation ms = new MySQLManipulation();
        Lesson temp = new Lesson(ms.getConnection());
        switch (instruction){
            case "insert": temp.insert(arr); s = "true"; break;
            case "delete": temp.delete(id); s = "true"; break;
            case "update": temp.update(arr); s = "true"; break;
            case "pull": s = temp.pull(id).toString(); break;
        }
        return s;
    }

    public String slides(String id, String[] arr, String instruction) throws SQLException, JSONException {
        String s = "";
        MySQLManipulation ms = new MySQLManipulation();
        Slides temp = new Slides(ms.getConnection());
       switch (instruction){
            case "insert": temp.insert(arr); s = "true"; break;
            case "delete": temp.delete(id); s = "true"; break;
            case "update": temp.update(arr); s = "true"; break;
            case "pull": s = temp.pull(id).toString(); break;
        }
        return s;
    }

    public String user (String id, String[] arr, String instruction) throws SQLException, JSONException {
        String s = "";
        System.out.println("here");
        MySQLManipulation ms = new MySQLManipulation();
        User temp = new User(ms.getConnection());
        switch (instruction) {
            case "insert": temp.insert(arr); s = "true"; break;
            case "delete": temp.delete(id); s = "true"; break;
            case "update": temp.update(arr); s = "true"; break;
            case "pull": s = temp.pull(id).toString(); break;
        }
        return s;
    }

    public String userhistory (String id, String[] arr, String instruction) throws SQLException, JSONException {
        MySQLManipulation ms = new MySQLManipulation();
        UserHistory temp = new UserHistory(ms.getConnection());
        temp.insert(arr);
        String s = "true";
        return s;
    }
}

package org.stl.controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

@org.springframework.web.bind.annotation.RestController
	public class RestController {

	
	 @RequestMapping("/")
	 @CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders = { "x-auth-token", "x-requested-with" })

	 public String greet() {
	  return "Hello from the other side!!!";

	 }

	}


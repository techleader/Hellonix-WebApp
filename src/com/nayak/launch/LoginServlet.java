package com.nayak.launch;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LoginServlet extends HttpServlet {

  private static final long serialVersionUID = 1533532266743443618L;

  @Override
  protected void doGet(final HttpServletRequest request, final HttpServletResponse response) throws ServletException,
      IOException {
    // Set response content type
    response.setContentType("text/json");
    String name = request.getParameter("username");
    String pwd = request.getParameter("password");
    
    
    

    try (PrintWriter out = response.getWriter()) {
      out.println("{\"user\":\"jawahar\"}");
      out.println("<user>jawahar<user>");
      out.println("{\"user\":\"jawahar\"}");
    }
  }
  
  @Override
  protected void doPost(final HttpServletRequest request, final HttpServletResponse response) throws ServletException,
      IOException {
    // Set response content type
    response.setContentType("text/html");
    String name = request.getParameter("username");
    String pwd = request.getParameter("password");
    try (PrintWriter out = response.getWriter()) {
	      out.println("<html><H1>Post  : "+ name   +" : " + pwd + "</h1></html>");
	    
    if(name!=null || pwd != null && name.equalsIgnoreCase("jawahar") && pwd.equalsIgnoreCase("rajesh")) {
    	out.println("Login Passed");
	    
    } else {
    	out.println("Login failed");
	    
    	/*String site = "Frame1.html" ;
    	response.setStatus(response.SC_MOVED_TEMPORARILY);
    	response.setHeader("Location", site); */
    }
    }
  }
}
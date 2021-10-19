package co.yedam.newtest;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/signUpServlet")
public class signUpServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   
    public signUpServlet() {
        super();
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		
		String cmd = request.getParameter("cmd");
		signUpDAO dao = signUpDAO.getInstance();
		user us = new user();
		
		String id = request.getParameter("userEmail");	//id?
		String pw = request.getParameter("userSignUpPw");	//pw?
		String name = request.getParameter("username");	//name?
		
		
		System.out.println("id: " + id + ",pw: "+ pw + ",name: " + name); 
		
		
		us.setUserId(id);
		us.setUserPw(pw);
		us.setUserName(name);
		// {"retCode":"OK"} / {"retCode":"NG"}
		PrintWriter out = response.getWriter();
		
		if(cmd == idCheck) {
			
			if((!dao.signUpCheckId(id))) {
				// 입력한 아이디로 신규 생성.
				out.println("{\"retCode\":\"OK\"}");
			} else {
				// 있거나 에러발생.
				out.println("{\"retCode\":\"NG\"}");
			}
			
		}else if(cmd == add) {
			dao.signUp(id, pw, name);
		}
		
		
	}

}

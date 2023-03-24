$(document).ready(function() {
    const username = "diegorohdenweb";
    const apiUrl = `https://api.github.com/users/${username}`;
  
    $.ajax({
      url: apiUrl,
      dataType: "json",
      success: function(data) {
        $(".profile-avatar").attr("src", data.avatar_url);
        $(".profile-name").text(data.name);
        $(".profile-username").text("@" + data.login);
        $(".numbers-item:eq(0)").find("h4").text("Repositórios");
        $(".numbers-item:eq(0)").append(data.public_repos);
        $(".numbers-item:eq(1)").find("h4").text("Seguidores");
        $(".numbers-item:eq(1)").append(data.followers);
        $(".numbers-item:eq(2)").find("h4").text("Seguindo");
        $(".numbers-item:eq(2)").append(data.following);
        $(".profile-link").attr("href", data.html_url);
      },
      error: function() {
        alert("Erro ao carregar dados do GitHub.");
      }
    });
  });
  
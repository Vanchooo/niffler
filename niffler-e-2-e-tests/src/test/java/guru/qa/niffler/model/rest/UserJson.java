package guru.qa.niffler.model.rest;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

@JsonInclude(JsonInclude.Include.NON_NULL)
public record UserJson(
    @JsonProperty("id")
    UUID id,
    @JsonProperty("username")
    String username,
    @JsonProperty("fullname")
    String fullname,
    @JsonProperty("firstname")
    String firstname,
    @JsonProperty("surname")
    String surname,
    @JsonProperty("currency")
    CurrencyValues currency,
    @JsonProperty("photo")
    String photo,
    @JsonProperty("photoSmall")
    String photoSmall,
    @JsonProperty("friendshipStatus")
    FriendshipStatus friendshipStatus,
    @JsonIgnore
    TestData testData) {

  public UserJson(String username) {
    this(username, null);
  }

  public UserJson(String username, TestData testData) {
    this(null, username, null, null, null, null, null, null, null, testData);
  }

  public UserJson addTestData(TestData testData) {
    return new UserJson(id, username, fullname, firstname, surname, currency, photo, photoSmall, friendshipStatus, testData);
  }
}

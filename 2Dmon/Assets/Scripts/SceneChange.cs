using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class SceneChange : MonoBehaviour
{
    public string SceneName;

    public InputField UserInput;
    public InputField PWDInput;
    public Text TextField;



    public void Login()
    {
        if( UserInput.text == "df@df.com" && PWDInput.text == "desafio2021") {
            SceneManager.LoadScene(SceneName);
        }
        else
        {
            //TextField = GameObject.Find ("Canvas/TextMessages").GetComponent<Text>();
            TextField.text = "Usuario e/ou Senha Incorreta";
        }
    }


    public void ChangeS()
    {
        SceneManager.LoadScene(SceneName);
    }
    
}

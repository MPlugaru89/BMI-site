function bmi (weight, height) {
    height /= 100;
    
    const bmi = weight / (height * height);
    
    return bmi
  }

  let nameuser1 = '';
  let nameuser2 = '';

document.querySelector('.verify').addEventListener('click',
    function () {
        const weight = document.querySelector('.input[type="number"][name="weight"]').value;
        const height = document.querySelector('.input[type="number"][name="height"]').value;
        nameuser1 = document.querySelector('.input[type="text"][name="user1"]').value;

        

        document.querySelector('.bmi').textContent = bmi(weight, height).toFixed(2);
    }
    
    )

    document.querySelector('.verify2').addEventListener('click',
    function () {
        const weight = document.querySelector('.input[type="number"][name="weight2"]').value;
        const height = document.querySelector('.input[type="number"][name="height2"]').value;
        nameuser2 = document.querySelector('.input[type="text"][name="user2"]').value;
        
        document.querySelector('.bmi2').textContent = bmi(weight, height).toFixed(2);
  
    }
    )

    document.querySelector('.compare').addEventListener('click',
    function () {
        const weight = document.querySelector('.input[type="number"][name="weight"]').value;
        const height = document.querySelector('.input[type="number"][name="height"]').value;
        const weight2 = document.querySelector('.input[type="number"][name="weight2"]').value;
        const height2 = document.querySelector('.input[type="number"][name="height2"]').value;
        
        const bmi1 = bmi(weight, height);
        const bmi2 = bmi(weight2, height2);
        if (bmi1 > bmi2) {
            document.querySelector('.compare').textContent = `BMI-ul lui ${nameuser1} este mai mare ca a lui ${nameuser2}: ${bmi1}`;
        } else{ 
            document.querySelector('.compare').textContent = `BMI-ul lui ${nameuser2} este mai mare ca a lui ${nameuser1}: ${bmi2}`;
        }
    }
    )




    
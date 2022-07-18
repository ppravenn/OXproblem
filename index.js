
        var number_id, problem_id, answer_id
        var problem_arr=[
            '펭귄은 남극에 산다.',
            '지구온난화에 영향을 받지 않는 유일한 지역이다.',
            '특별한 자격을 가진 사람만이 출입할 수 있다.',
            '남극조약에 따라 모두가 주인인 땅이다.',
            '남극은 외래종의 유입을 막고 있다.',
            '당신의 점수를 확인하세요.'
        ];
        var answer_arr=['O','X','X','O','O']
        var select, score;
        var proNum, startNum, endNum;
        function init(){
            number_id = document.querySelector('#number_id')
            problem_id=document.querySelector('#problem_id')
            answer_id=document.querySelector('#answer_id')
            
            startNum=0;
            endNum=5;
            score=0;
            setProblem();
        }
        init();

        function setProblem(){
            problem_id.innerHTML=`<p>${problem_arr[startNum]}</p>`
            if(startNum==endNum){
                number_id.innerHTML=`<span class="label">result</span>`
                answer_id.innerHTML=`<button type="button" class="button res" onclick="btnRes()">결과확인</button><button type="button" class="restart" onclick="history.go(0)">다시하기</button>`;
            } else{
                number_id.innerHTML=`<span>< ${parseInt(startNum+1)}/5 ></span>`
                answer_id.innerHTML=`<button type="button" class="button o" onclick="btnO()">O</button><button type="button" class="button x" onclick="btnX()">X</button>`
            }
        }

        function btnO(){
            selectAnswer="O";
            if(answer_arr[startNum] == selectAnswer){
                score++;
            }
            startNum++;
            setProblem();
        }
        function btnX(){
            selectAnswer="X";
            if(answer_arr[startNum] == selectAnswer){
                score++;
            }
            startNum++;
            setProblem();
        }
        function btnRes(){
            Swal.fire({
                title:'',
                text:'',
                html:`<b>당신의 점수는 ${score}점 입니다.</b>`,
                icon:'success',
                confirmButtonColor:'#d33',
                confirmButtonText:'닫기',
                allowOutsideClick:false
                
            })
        }
   
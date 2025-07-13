'use client'
import React, {memo, useEffect, useMemo, useRef, useState} from 'react';

function Sites(){

    // const [{data, fetching}] = useSitesQuery()
    const [largura, setLargura] = useState(0);

    const componentRef = useRef(null);
    const [width, setWidth] = useState(0);
    const [alturas, setAlturas] = useState<number[] | null>(null)
    const [siteItems, setSiteItems] = useState<number[] | null>(null)

    // if (fetching){
        //     return <Loading></Loading>
    // }
    const response = [
      {
        "id": "cmd0wen671rst07pmzsne1a6u",
        "name": "dLivros",
        "link": "https://dlivros.com",
        "stage": "DRAFT",
        "validation": false
      },
      {
        "id": "cmd0whu6h1rvk07pmoxqjuiqe",
        "name": "Geek Prank",
        "link": "https://geekprank.com/hacker/simulador-pt/",
        "stage": "DRAFT",
        "validation": true
      },
      {
        "id": "cmd0wiw5x1rwd07pmej5nappy",
        "name": "ZTY",
        "link": "https://zty.pe",
        "stage": "DRAFT",
        "validation": true
      },
      {
        "id": "cmd0wkpeu1rx407pm906dkdte",
        "name": "PimEyes",
        "link": "https://pimeyes.com/pthero-section",
        "stage": "DRAFT",
        "validation": false
      },
      {
        "id": "cmd0xt9p81s7f07pmsjal007i",
        "name": "pngimg",
        "link": "https://pngimg.com",
        "stage": "DRAFT",
        "validation": false
      },
      {
        "id": "cmd0xwqeg1sa607pm8zgt8m7o",
        "name": "Kiddo Works Sheets",
        "link": "www.kiddoworksheets.com",
        "stage": "DRAFT",
        "validation": false
      },
      {
        "id": "cmd0xzty61sjc08o7u787umg7",
        "name": "CODDY",
        "link": "https://coddy.tech",
        "stage": "DRAFT",
        "validation": false
      },
      {
        "id": "cmd0y26wy1sk908o7stjbeorf",
        "name": "MESSCRAFT",
        "link": "https://mess.eu.org",
        "stage": "DRAFT",
        "validation": true
      },
      {
        "id": "cmd0y87oz1sfj07pmt18jtcrr",
        "name": "Magic Resume",
        "link": "https://magicv.art/en",
        "stage": "DRAFT",
        "validation": false
      },
      {
        "id": "cmd0yakh61sny08o7ad2ylou6",
        "name": "Text-Behind-Image",
        "link": "https://textbehindimage.com",
        "stage": "DRAFT",
        "validation": false
      },
      {
        "id": "cmd0wen671rst07pmzsne1a6u",
        "name": "dLivros",
        "link": "https://dlivros.com",
        "stage": "DRAFT",
        "validation": false
      },
      {
        "id": "cmd0whu6h1rvk07pmoxqjuiqe",
        "name": "Geek Prank",
        "link": "https://geekprank.com/hacker/simulador-pt/",
        "stage": "DRAFT",
        "validation": true
      },
      {
        "id": "cmd0wiw5x1rwd07pmej5nappy",
        "name": "ZTY",
        "link": "https://zty.pe",
        "stage": "DRAFT",
        "validation": true
      },
      {
        "id": "cmd0wkpeu1rx407pm906dkdte",
        "name": "PimEyes",
        "link": "https://pimeyes.com/pthero-section",
        "stage": "DRAFT",
        "validation": false
      },
      {
        "id": "cmd0xt9p81s7f07pmsjal007i",
        "name": "pngimg",
        "link": "https://pngimg.com",
        "stage": "DRAFT",
        "validation": false
      },
      {
        "id": "cmd0xwqeg1sa607pm8zgt8m7o",
        "name": "Kiddo Works Sheets",
        "link": "www.kiddoworksheets.com",
        "stage": "DRAFT",
        "validation": false
      },
      {
        "id": "cmd0xzty61sjc08o7u787umg7",
        "name": "CODDY",
        "link": "https://coddy.tech",
        "stage": "DRAFT",
        "validation": false
      },
      {
        "id": "cmd0y26wy1sk908o7stjbeorf",
        "name": "MESSCRAFT",
        "link": "https://mess.eu.org",
        "stage": "DRAFT",
        "validation": true
      },
      {
        "id": "cmd0y87oz1sfj07pmt18jtcrr",
        "name": "Magic Resume",
        "link": "https://magicv.art/en",
        "stage": "DRAFT",
        "validation": false
      },
      {
        "id": "cmd0yakh61sny08o7ad2ylou6",
        "name": "Text-Behind-Image",
        "link": "https://textbehindimage.com",
        "stage": "DRAFT",
        "validation": false
      }
    ]

    const dividindoElementos = useMemo(
        () => {
            // DIVIDE OS ELEMENTOS
            // SERVE PARA CRIAR A PAGINA PARECIDA COM O PINTEREST
            const resultado = [];
            const tamanhoBase = Math.floor(response.length / 4);
            let sobra = response.length % 4;

            let inicio = 0;
            // SEPARA EM 4 ARRAYS QUE EQUIVALEM A CADA COLUNA
            for (let i = 0; i < 4; i++) {
                let tamanho = tamanhoBase + (sobra > 0 ? 1 : 0);
                resultado.push(response.slice(inicio, inicio + tamanho));
                inicio += tamanho;
                if (sobra > 0) sobra--;
            }
            return resultado;
        },
        [response]
    );

    function pseudoRandomFromString(str: string): number {
        let hash = 0
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash)
        }
        return Math.abs(hash % 100) + 100 // altura entre 100 e 200
    }

    useEffect(() => {
        function atualizarLargura() {
            if (componentRef?.current) {
                const novaLargura = componentRef?.current?.offsetWidth;
                setWidth(novaLargura);
                console.log('Nova largura:', novaLargura);
            }
        }

        atualizarLargura(); // largura inicial
        window.addEventListener('resize', atualizarLargura); // escuta resize

        return () => {
            window.removeEventListener('resize', atualizarLargura); // cleanup
        };
    }, []);
    
    return(
        
        <div className='flex flex-col w-full min-h-screen' ref={componentRef}>
            <div className="grid grid-cols-4 gap-4">
                {dividindoElementos?.map((item, index_i)=>{
                    return(
                        <div key={index_i} className={`bg-red-700 grid gap-4 h-10 justify-center items-center`}>
                            {item?.map((item, index_y)=>{
                                return(
                                    <div 
                                        key={index_y}
                                        style={{width: (width/4) - 20, height: `${pseudoRandomFromString(item.id)}px` }} 
                                        className='bg-blue-600 flex rounded-lg justify-center items-center text-center ease-out duration-300 hover:bg-sky-700'>
                                            <h1>{item.name}</h1>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default memo(Sites)
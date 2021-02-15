import React, { useState, FormEvent } from 'react';

import './styles.css';
import MenuBar from '../../components/MenuBar';
import Label from '../../components/Label';
import oceanImg from '../../assets/ocean-sea-pacific.png'
import nameLogo from '../../assets/logo.png'
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Modal from '../../components/Modal';


export default function HomePage(){

    const [modaIsOpen, setIsOpen] = useState(false);

    return(
        <div className="home-menu">
            <MenuBar />
            <div className="logo">
                <img src={oceanImg} className="ocean-img" alt="Oceano"/>
                <img src={nameLogo} className="logo-img" alt="Varal das Águas"/>
                <div className="home-body">
                    <div className="home-content" id="contest">
                        <div className="contest">
                            <div className="contest-information">
                                <Label title="O CONCURSO"/>
                                <p className="informations">Concurso de fotografia para todos os técnicos do Inema<br/> para 
                                exposição de fotos que retratem a temática água <br/>(os desafios 
                                e as belezas encontradas em campo) pelos<br/>colaboradores. Além 
                                de uma apresentação cultural com<br/>um artista de rua (poesia, 
                                musica, cordel) que aborde a<br/>temática água. 
                                </p>
                            </div>
                            <div className="contest-register">
                                <div className="content-register">
                                    <p className="title-contest">EXPOSIÇÃO DE FOTOS</p>
                                    <p className="description-contest">20 á 24/03/2017 na divisórias da Ouvidoria(em frente ao elevador)</p>
                                    <p className="title-contest">APRESENTAÇÃO</p>
                                    <p className="description-contest">20/03/2017 das 16:30h ás 17:30h.</p>
                                </div>
                                <Button title="FAÇA SUA INSCRIÇÃO" onClick={() => (setIsOpen(true))} />
                                <Modal
                                    modaIsOpen={modaIsOpen}
                                    modalIsClose={() => (setIsOpen(false))}
                                />
                            </div>
                        </div>                        
                        <hr/>
                        <div id="on">
                            <div className="home-content">
                                <Label title="SOBRE"/>
                                <p className="informations">Objetivos<br/><br/>
                                    Promover a seleção de 100 fotografias produzidas por colaboradores do Inema em comemoração ao dia da água, que será elaborado um mural de fotos denominado de “Varal das Águas”.<br/><br/>
                                    Dos participante<br/><br/>
                                    Poderão participar do Concurso Fotográfico 2017: Todos os colaboradores do Instituto do Meio Ambiente e Recursos Hídricos - INEMA e Secretaria do Meio Ambiente -SEMA.<br/><br/>
                                    Das especificações das fotografias participantes<br/><br/>
                                    As fotografias devem abordar somente o tema OS DESAFIOS E AS BELEZAS RETRATADAS EM CAMPO REFERENTE À SITUAÇÃO HIDRICA, devendo ser obrigatoriamente a foto ser tirada em inspeção em campo a serviço do Inema.<br/>
                                    Premiação final do concurso<br/><br/>
                                    As 05 (cinco) primeiras fotografia que for mais votada nas redes sociais (Facebook e Instagram) do Inema, receberá como prêmio.</p>
                            </div>
                            <div className="home-content" id="rules">
                                <Label title="REGRAS"/>
                                <p className="informations">Todas as fotos que retrate da temática água (tais como situação de secas ou excedentes hídricos, as belezas e os desafios de se trabalhar com os recursos hídricos etc.) serão bem vindas.<br/><br/>
                                    • As fotos devem ser originais e sem alterações.<br/>
                                    • As fotos devem expor os ambientes visitados em inspeções técnicas realizadas durante inspeções pelo INEMA.<br/>
                                    • Fotografias que incluam pessoas serão desclassificadas.<br/>
                                    • As fotos devem ser enviadas com um formulário de inscrição preenchido.<br/>
                                    • As fotografias do concurso se tornarão publicas.<br/>
                                    • O fotógrafo da foto que receber mais votos ganhará um prêmio simbólico.<br/>
                                    • Cada pessoa só poderá cadastrar uma única foto.<br/>
                                    • A votação será por meio das redes sociais do INEMA.<br/>
                                    • As vagas serão limitadas apenas 50.<br/><br/>                            
                                    A foto vencedora irá ganhar um kit de brinde (Agenda, caneta, livro). 
                                </p>
                            </div>                            
                        </div> 
                    </div>
                    <Footer/>
                </div>
            </div>            
        </div>                     
    );
}
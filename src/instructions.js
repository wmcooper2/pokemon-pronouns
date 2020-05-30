import React from "react";

const EnglishInst = {
  above: "Above Sentence",
  below: "Below Sentence",
  one: (
    <React.Fragment>
      Click the characters {window.innerHeight < 720 ? "below" : "on the right"}{" "}
      to change the &nbsp;
      <span className="helpsubject">subject</span>&nbsp;.
    </React.Fragment>
  ),
  two: (
    <React.Fragment>
      Click the&nbsp;<span className="helpverb">verb</span>&nbsp; and &nbsp;
      <span className="helpobject">object</span>&nbsp; to cycle them.
    </React.Fragment>
  ),
  three: (
    <React.Fragment>
      The &nbsp;<span className="helpsubject">subject</span>&nbsp; and &nbsp;
      <span className="helpverb">verb</span>&nbsp;only go to the correct answer
      when clicked.
    </React.Fragment>
  ),
  four: (
    <React.Fragment>
      The &nbsp;<span className="helpobject">object</span>&nbsp;cycles through a
      few options.
    </React.Fragment>
  ),
  five: (
    <React.Fragment>
      It is up to the teacher to know the correct use of the &nbsp;
      <span className="helpobject">object</span>&nbsp;.
    </React.Fragment>
  ),
};

const JapaneseInst = {
  above: "上の文",
  below: "下の文",
  one: (
    <React.Fragment>
      &nbsp;<span className="helpsubject">主語</span>&nbsp;
      を替えるために、右のキャラクターをクリックします。
    </React.Fragment>
  ),
  two: (
    <React.Fragment>
      &nbsp;<span className="helpverb">動詞</span>&nbsp;と&nbsp;
      <span className="helpobject">目的語</span>&nbsp;もクリックして替えます。
    </React.Fragment>
  ),
  three: (
    <React.Fragment>
      &nbsp;<span className="helpsubject">主語</span>&nbsp;と&nbsp;
      <span className="helpverb">動詞</span>&nbsp;は正確な形のみに替わります。
    </React.Fragment>
  ),
  four: (
    <React.Fragment>
      &nbsp;<span className="helpobject">目的語</span>&nbsp;
      は三つの選択肢から繰り返されます。
    </React.Fragment>
  ),
  five: (
    <React.Fragment>
      &nbsp;<span className="helpobject">目的語</span>
      &nbsp;の正確な使い方は先生次第です。
    </React.Fragment>
  ),
};

export { EnglishInst, JapaneseInst };

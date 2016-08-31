export interface PanelProps {
  className?: string;
}

const Panel = ({ className }: PanelProps) => (
  <div  className={`panel ${className || ""}`}>
    <div className="panel__item--left one-whole one-third@lap-and-up">
      <div className="soft-double">
        <h1>Pizza?</h1>
        <p>lots of pizza is always better</p>
      </div>
    </div>
    <div className="panel__item--right one-whole two-thirds@lap-and-up">
      <div className="soft-double">
        <h1>Hamburgers?</h1>
        <p>
          Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis.
          Nulla vitae elit libero, a pharetra augue.
        </p>
        <p>
          Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur.
          Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit
          tempus porttitor. Nulla vitae elit libero, a pharetra augue.
        </p>
        <p>
          Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus
          auctor fringilla. Donec sed odio dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
        </p>
      </div>
    </div>
  </div>
);

export default Panel;

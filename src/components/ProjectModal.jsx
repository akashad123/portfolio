import { useEffect } from "react";

console.log("🎨 Modal component loaded");

const ProjectModal = ({ project, close }) => {
  useEffect(() => {
    console.log("📱 Modal opened for:", project?.title);
  }, [project]);

  if (!project) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '16px'
      }}
      onClick={close}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          maxWidth: '800px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={project.image} 
          alt={project.title}
          style={{
            width: '100%',
            height: '350px',
            objectFit: 'cover'
          }}
        />
        
        <button
          onClick={close}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '40px',
            height: '40px',
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            fontSize: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          ✕
        </button>
        
        <div style={{ padding: '20px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: 'bold',
            marginBottom: '8px'
          }}>
            {project.title}
          </h2>
          
          <p style={{ 
            color: '#4b5563',
            lineHeight: '1.4',
            marginBottom: '10px'
          }}>
            {project.description}
          </p>

          {project.technologies && (
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ fontWeight: '600', marginBottom: '8px' }}>Technologies:</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      padding: '4px 12px',
                      backgroundColor: '#f3f4f6',
                      borderRadius: '999px',
                      fontSize: '14px'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '8px 24px',
                backgroundColor: 'black',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '999px',
                marginRight: '12px'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              Live Demo
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '8px 24px',
                border: '2px solid black',
                color: 'black',
                textDecoration: 'none',
                borderRadius: '999px'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
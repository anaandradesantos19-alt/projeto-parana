/**
 * Módulo de Usuário - Organizado e de fácil manutenção
 */

// 1. Regra de Negócio (Lógica pura, fácil de testar)
const UserRules = {
  MIN_AGE_ADULT: 18,

  isAdult(age) {
    return age >= this.MIN_AGE_ADULT;
  },

  getStatusData(user) {
    if (!user || typeof user.age !== 'number') {
      throw new Error('Dados de usuário inválidos.');
    }

    const adult = this.isAdult(user.age);
    
    return {
      message: `Olá, ${user.name}! Você é ${adult ? 'maior' : 'menor'} de idade.`,
      typeClass: adult ? 'status-badge--success' : 'status-badge--warning'
    };
  }
};

// 2. Manipulação de Interface (DOM)
const UserUI = {
  renderProfile(containerId, user) {
    const container = document.getElementById(containerId);

    // Guard Clause: Cancela a execução se o container não existir no HTML
    if (!container) {
      console.warn(`Elemento com ID "${containerId}" não foi encontrado.`);
      return;
    }

    try {
      const status = UserRules.getStatusData(user);

      // Limpa e atualiza o conteúdo de forma segura
      container.textContent = status.message;
      container.className = `status-badge ${status.typeClass}`;
      
    } catch (error) {
      console.error('Erro ao renderizar perfil:', error.message);
      container.textContent = 'Não foi possível carregar os dados do usuário.';
    }
  }
};

// 3. Inicialização da Aplicação
document.addEventListener('DOMContentLoaded', () => {
  // Exemplo de dados
  const currentUser = {
    name: 'Ana',
    age: 20
  };

  // Renderiza no HTML
  UserUI.renderProfile('user-status', currentUser);
});

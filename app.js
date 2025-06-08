// Application data
const appData = {
  "products": [
    {
      "name": "Grip Ergonômico Triangular",
      "price": 12.99,
      "colors": ["Azul", "Verde", "Rosa", "Amarelo", "Laranja"],
      "description": "Grip ergonômico especialmente desenvolvido para crianças, promove a preensão tripóide correta"
    }
  ],
  "benefits": [
    {
      "title": "Melhora a Caligrafia",
      "description": "O design triangular guia os dedos para a posição correta, resultando em letra mais legível"
    },
    {
      "title": "Reduz o Cansaço",
      "description": "Ergonomia otimizada que diminui a fadiga muscular durante a escrita"
    },
    {
      "title": "100% Seguro",
      "description": "Material PLA atóxico, testado e aprovado para uso infantil"
    },
    {
      "title": "Fácil de Usar",
      "description": "Encaixa facilmente em lápis e canetas padrão, sem necessidade de ferramentas"
    },
    {
      "title": "Durável",
      "description": "Fabricado em impressora 3D com material resistente e lavável"
    },
    {
      "title": "Design Atrativo",
      "description": "Cores vibrantes que motivam as crianças a escrever e desenhar"
    }
  ],
  "testimonials": [
    {
      "name": "Maria Silva",
      "role": "Mãe de Sofia, 7 anos",
      "text": "A Sofia sempre teve dificuldade com a caligrafia. Depois de usar o grip, a letra dela melhorou muito!"
    },
    {
      "name": "Professor João Santos",
      "role": "Professor do 2º ano",
      "text": "Recomendo para todos os meus alunos. A diferença na postura e qualidade da escrita é notável."
    },
    {
      "name": "Ana Costa",
      "role": "Fisioterapeuta Pediátrica",
      "text": "Excelente produto para desenvolvimento da coordenação motora fina. Uso na minha clínica."
    }
  ],
  "specifications": {
    "material": "PLA (Ácido Polilático) - 100% atóxico",
    "dimensions": "30mm altura x 8mm furo interno",
    "compatibility": "Lápis e canetas padrão",
    "age_range": "3-12 anos",
    "colors": 5,
    "cleaning": "Lavar com água morna e sabão neutro"
  },
  "faq": [
    {
      "question": "Para que idade é recomendado?",
      "answer": "O grip é ideal para crianças de 3 a 12 anos, período crucial para desenvolvimento da escrita."
    },
    {
      "question": "É seguro para crianças?",
      "answer": "Sim, é feito em PLA atóxico, livre de BPA e outras substâncias nocivas."
    },
    {
      "question": "Funciona com qualquer lápis?",
      "answer": "Sim, o furo de 8mm é compatível com lápis, canetas e lapiseiras padrão."
    },
    {
      "question": "Como limpar?",
      "answer": "Lave com água morna e sabão neutro. Deixe secar completamente antes de usar."
    },
    {
      "question": "Quanto tempo leva para entregar?",
      "answer": "Como cada peça é impressa sob encomenda, o prazo é de 5-7 dias úteis."
    }
  ]
};

// DOM elements
let selectedColor = '';
let currentQuantity = 1;
const basePrice = 12.99;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    populateBenefits();
    populateTestimonials();
    populateSpecifications();
    populateColorOptions();
    populateFAQ();
    setupEventListeners();
    updateTotalPrice();
}

// Populate benefits section
function populateBenefits() {
    const benefitsGrid = document.getElementById('benefits-grid');
    const icons = ['✓', '⚡', '🛡️', '🎯', '💪', '🎨'];
    const iconColors = ['blue', 'green', 'orange', 'blue', 'green', 'orange'];

    appData.benefits.forEach((benefit, index) => {
        const benefitCard = document.createElement('div');
        benefitCard.className = 'benefit-card';
        benefitCard.innerHTML = `
            <div class="benefit-card__icon benefit-card__icon--${iconColors[index % iconColors.length]}">
                ${icons[index % icons.length]}
            </div>
            <h3 class="benefit-card__title">${benefit.title}</h3>
            <p class="benefit-card__description">${benefit.description}</p>
        `;
        benefitsGrid.appendChild(benefitCard);
    });
}

// Populate testimonials section
function populateTestimonials() {
    const testimonialsGrid = document.getElementById('testimonials-grid');

    appData.testimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card';
        testimonialCard.innerHTML = `
            <p class="testimonial__text">"${testimonial.text}"</p>
            <div class="testimonial__author">${testimonial.name}</div>
            <div class="testimonial__role">${testimonial.role}</div>
        `;
        testimonialsGrid.appendChild(testimonialCard);
    });
}

// Populate specifications section
function populateSpecifications() {
    const specificationsGrid = document.getElementById('specifications-grid');
    const specs = [
        { label: 'Material', value: appData.specifications.material },
        { label: 'Dimensões', value: appData.specifications.dimensions },
        { label: 'Compatibilidade', value: appData.specifications.compatibility },
        { label: 'Idade recomendada', value: appData.specifications.age_range },
        { label: 'Cores disponíveis', value: appData.specifications.colors },
        { label: 'Limpeza', value: appData.specifications.cleaning }
    ];

    specs.forEach(spec => {
        const specItem = document.createElement('div');
        specItem.className = 'spec-item';
        specItem.innerHTML = `
            <span class="spec-label">${spec.label}:</span>
            <span class="spec-value">${spec.value}</span>
        `;
        specificationsGrid.appendChild(specItem);
    });
}

// Populate color options
function populateColorOptions() {
    const colorOptionsContainer = document.getElementById('color-options');
    const colorSelect = document.getElementById('color');
    
    appData.products[0].colors.forEach(color => {
        // Create visual color option
        const colorOption = document.createElement('div');
        colorOption.className = 'color-option';
        colorOption.dataset.color = color;
        colorOption.innerHTML = `
            <div class="color-swatch color-swatch--${color.toLowerCase()}"></div>
            <div class="color-name">${color}</div>
        `;
        colorOption.addEventListener('click', () => selectColor(color, colorOption));
        colorOptionsContainer.appendChild(colorOption);

        // Create select option
        const option = document.createElement('option');
        option.value = color;
        option.textContent = color;
        colorSelect.appendChild(option);
    });
}

// Populate FAQ section
function populateFAQ() {
    const faqList = document.getElementById('faq-list');

    appData.faq.forEach((faq, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `
            <button class="faq-question" data-index="${index}">
                ${faq.question}
                <span class="faq-icon">▼</span>
            </button>
            <div class="faq-answer">
                <p>${faq.answer}</p>
            </div>
        `;
        faqList.appendChild(faqItem);
    });
}

// Setup event listeners
function setupEventListeners() {
    // FAQ accordion
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('faq-question')) {
            toggleFAQ(e.target);
        }
    });

    // Order form
    const orderForm = document.getElementById('order-form');
    orderForm.addEventListener('submit', handleOrderSubmit);

    // Quantity change
    const quantityInput = document.getElementById('quantity');
    quantityInput.addEventListener('input', function() {
        currentQuantity = parseInt(this.value) || 1;
        updateTotalPrice();
    });

    // Color select change
    const colorSelect = document.getElementById('color');
    colorSelect.addEventListener('change', function() {
        const colorOptions = document.querySelectorAll('.color-option');
        colorOptions.forEach(option => {
            option.classList.remove('selected');
            if (option.dataset.color === this.value) {
                option.classList.add('selected');
            }
        });
        selectedColor = this.value;
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Modal close
    const closeModal = document.getElementById('close-modal');
    closeModal.addEventListener('click', hideSuccessModal);

    // Close modal on background click
    const modal = document.getElementById('success-modal');
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            hideSuccessModal();
        }
    });
}

// Color selection
function selectColor(color, colorElement) {
    // Remove previous selection
    document.querySelectorAll('.color-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add selection to clicked color
    colorElement.classList.add('selected');
    
    // Update select field
    const colorSelect = document.getElementById('color');
    colorSelect.value = color;
    selectedColor = color;
}

// Toggle FAQ item
function toggleFAQ(button) {
    const faqItem = button.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Update total price
function updateTotalPrice() {
    const total = (basePrice * currentQuantity).toFixed(2);
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = `€${total}`;
}

// Handle order form submission
function handleOrderSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const orderData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        color: formData.get('color'),
        quantity: formData.get('quantity'),
        address: formData.get('address'),
        notes: formData.get('notes'),
        total: (basePrice * currentQuantity).toFixed(2)
    };
    
    // Validate required fields
    if (!orderData.name || !orderData.email || !orderData.phone || !orderData.color || !orderData.address) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(orderData.email)) {
        alert('Por favor, insira um email válido.');
        return;
    }
    
    // Validate quantity
    if (orderData.quantity < 1 || orderData.quantity > 50) {
        alert('A quantidade deve ser entre 1 e 50.');
        return;
    }
    
    // Simulate order processing
    processOrder(orderData);
}

// Process order (simulation)
function processOrder(orderData) {
    // In a real application, this would send data to a server
    console.log('Order data:', orderData);
    
    // Show success modal
    showSuccessModal();
    
    // Reset form
    document.getElementById('order-form').reset();
    currentQuantity = 1;
    selectedColor = '';
    updateTotalPrice();
    
    // Remove color selections
    document.querySelectorAll('.color-option').forEach(option => {
        option.classList.remove('selected');
    });
}

// Show success modal
function showSuccessModal() {
    const modal = document.getElementById('success-modal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Hide success modal
function hideSuccessModal() {
    const modal = document.getElementById('success-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

// Form validation helpers
function validateForm(formData) {
    const errors = [];
    
    if (!formData.name.trim()) {
        errors.push('Nome é obrigatório');
    }
    
    if (!formData.email.trim()) {
        errors.push('Email é obrigatório');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.push('Email inválido');
    }
    
    if (!formData.phone.trim()) {
        errors.push('Telefone é obrigatório');
    }
    
    if (!formData.color) {
        errors.push('Cor é obrigatória');
    }
    
    if (!formData.address.trim()) {
        errors.push('Morada é obrigatória');
    }
    
    const quantity = parseInt(formData.quantity);
    if (isNaN(quantity) || quantity < 1 || quantity > 50) {
        errors.push('Quantidade deve ser entre 1 e 50');
    }
    
    return errors;
}

// Utility function to format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('pt-PT', {
        style: 'currency',
        currency: 'EUR'
    }).format(amount);
}
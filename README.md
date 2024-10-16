# Angular SOLID Principles Example

This project demonstrates the application of SOLID principles in Angular, particularly focusing on the use of interfaces and dependency injection.

## Table of Contents

- [Introduction](#introduction)
- [SOLID Principles](#solid-principles)
- [Implementation](#implementation)
- [Usage](#usage)
- [Documentation](#documentation)

## Introduction

The SOLID principles are a set of design principles intended to make software designs more understandable, flexible, and maintainable. This project illustrates how to implement these principles in an Angular application.

## SOLID Principles

### S - Single Responsibility Principle (SRP)
A class should have one, and only one, reason to change. In this project, each service handles its specific payment processing logic.

### O - Open/Closed Principle (OCP)
Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification. The `PaymentProcessor` interface allows adding new payment methods without modifying existing code.

### L - Liskov Substitution Principle (LSP)
Objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program. The `PaymentProcessor` interface ensures that any new payment method can be used interchangeably.

### I - Interface Segregation Principle (ISP)
Clients should not be forced to depend on interfaces they do not use. By defining a specific `PaymentProcessor` interface, services implement only the necessary methods.

### D - Dependency Inversion Principle (DIP)
High-level modules should not depend on low-level modules but rather on abstractions. This project uses an `InjectionToken` to inject multiple payment processors into the `PaymentService`.

## Implementation

### Payment Processor Interface

Define the `PaymentProcessor` interface:

```typescript
export interface PaymentProcessor {
  process(): void;
}

### Links: `https://rodelcalda.hashnode.dev/activity-25-solid-principles-angular` 

